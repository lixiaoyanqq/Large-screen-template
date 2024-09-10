/*
 * @Author: dbkey
 * @Date: 2024-09-04 16:51:08
 * @LastEditors: dbkey
 * @LastEditTime: 2024-09-04 16:51:23
 * @FilePath: /data-screen/commitlint.config.js
 * @Description: 
 * 
 * 
 */
module.exports = {
    ignores: [(commit) => commit.includes('init')],
    extends: ['@commitlint/config-conventional'],
    rules: {
      'body-leading-blank': [2, 'always'],
      'footer-leading-blank': [1, 'always'],
      'header-max-length': [2, 'always', 108],
      'subject-empty': [2, 'never'],
      'type-empty': [2, 'never'],
      'subject-case': [0],
      'type-enum': [
        2,
        'always',
        [
          'feat',
          'fix',
          'perf',
          'style',
          'docs',
          'test',
          'refactor',
          'build',
          'ci',
          'chore',
          'revert',
          'wip',
          'workflow',
          'types',
          'release',
        ],
      ],
    },
  };
  