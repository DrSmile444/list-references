#!/usr/bin/env node
const fs = require('fs');
const open = require('open');
const { program, Option } = require('commander');
const { ListReferences, referencesFormatting } = require('../src');

program
  .version('1.1.0')
  .arguments('<file>')
  .option('-p, --pattern <pattern>', 'custom reference pattern. Use ${title}, ${url}, and ${date}')
  .addOption(
    new Option('-f, --formatting <formatting>', 'formatting type')
      .choices(Object.keys(referencesFormatting))
      .default('VAK_UKRAINE')
  )
  .action(start)

program.addHelpText('after', `
Example call:
  $ list-references links.txt -f DSTU_8302_2015
  $ list-references links.txt -p "Title: \${title}. URL:\${url}". Date: \${date}`);

program.parse(process.argv);


async function start(referencesFilePath, options) {
  const resultFilePath = `${referencesFilePath}.result.txt`;

  console.log('* Reading the file...');
  const file = fs.readFileSync(referencesFilePath, { encoding: 'utf8' });
  const links = file.split('\n').filter(Boolean);

  console.log('* Getting the links...');
  const listReferences = new ListReferences(referencesFormatting[options.formatting]);
  const references = await listReferences.processLinks(links, { dateString: '30.05.2021' });

  fs.writeFileSync(resultFilePath, references.join('\n'), { encoding: 'utf8' });
  open(resultFilePath);
  console.log('* Done!');
}
