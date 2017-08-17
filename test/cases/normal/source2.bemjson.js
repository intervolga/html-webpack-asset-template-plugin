module.exports = {
  block: 'page',
  title: 'Title of the page 1',
  favicon: '/favicon.ico',
  head: [
    {elem: 'meta', attrs: {name: 'description', content: ''}},
    {
      elem: 'meta',
      attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    },
  ],
  mods: {theme: 'islands'},
  content: [
    {
      block: 'header',
      content: [
        'header content goes here',
      ],
    },
    {
      block: 'content',
      content: [
        {
          tag: 'p',
          content: [
            'This is a demo page to show blocks from bem-components library. ',
            {tag: 'br'},
            'Feel free to replace it with your own content in ' +
            'desktop.bundles/index/index.bemjson.js.',
            {tag: 'br'},
            'For more info about BEM check out ',
            {
              block: 'link',
              url: 'https://bem.info/',
              content: 'bem.info',
            },
            '.',
          ],
        },
        {tag: 'h2', content: 'islands theme'},

        {
          block: 'table',
          tag: 'table',
          attrs: {style: 'table-layout: fixed; width: 600px'},
          content: [
            {
              elem: 'row',
              tag: 'tr',
              content: [
                {elem: 'title', tag: 'th', content: 'size s'},
                {elem: 'title', tag: 'th', content: 'size m'},
                {elem: 'title', tag: 'th', content: 'size l'},
                {elem: 'title', tag: 'th', content: 'size xl'},
              ],
            },
            {
              elem: 'row',
              tag: 'tr',
              content: [
                {elem: 'cell', tag: 'td', size: 's'},
                {elem: 'cell', tag: 'td', size: 'm'},
                {elem: 'cell', tag: 'td', size: 'l'},
                {elem: 'cell', tag: 'td', size: 'xl'},
              ].map(function(cell) {
                cell.attrs = {style: 'width: 25%; vertical-align: top;'};
                cell.content = [
                ];
                return cell;
              }),
            },
          ],
        },

        {tag: 'br'},

        {
          block: 'line',
          mods: {size: 's'},
          content: [
            'size s (24px height) ',
            {
              block: 'input',
              mods: {'theme': 'islands', 'size': 's', 'has-clear': true},
              val: 'value',
              placeholder: 'placeholder',
            },
            ' ',
            {
              block: 'button',
              mods: {theme: 'islands', size: 's'},
              text: 'button',
            },
            ' ',
            {
              block: 'button',
              mods: {theme: 'islands', size: 's'},
              text: 'button',
              icon: {block: 'icon', mods: {action: 'download'}},
            },
            ' ',
            {
              block: 'button',
              mods: {theme: 'islands', size: 's'},
              icon: {
                block: 'spin',
                mods: {theme: 'islands', size: 'xs', visible: true},
              },
              text: 'Loading...',
            },
            ' ',
            {
              block: 'checkbox',
              mods: {theme: 'islands', size: 's', type: 'button'},
              val: 1,
              text: 'check',
            },
            ' ',
            {
              block: 'spin',
              mods: {theme: 'islands', size: 's', visible: true},
            },
          ],
        },

        {tag: 'br'},

        {
          block: 'line',
          mods: {size: 'm'},
          content: [
            'size m (28px height) ',
            {
              block: 'input',
              mods: {'theme': 'islands', 'size': 'm', 'has-clear': true},
              val: 'value',
              placeholder: 'placeholder',
            },
            ' ',
            {
              block: 'button',
              mods: {theme: 'islands', size: 'm'},
              text: 'button',
            },
            ' ',
            {
              block: 'button',
              mods: {theme: 'islands', size: 'm'},
              text: 'button',
              icon: {block: 'icon', mods: {action: 'download'}},
            },
            ' ',
            {
              block: 'button',
              mods: {theme: 'islands', size: 'm'},
              icon: {
                block: 'spin',
                mods: {theme: 'islands', size: 's', visible: true},
              },
              text: 'Loading...',
            },
            ' ',
            {
              block: 'checkbox',
              mods: {theme: 'islands', size: 'm', checked: true},
              val: 1,
              text: 'check',
            },
            ' ',
            {
              block: 'checkbox',
              mods: {
                theme: 'islands',
                size: 'm',
                type: 'button',
                checked: true,
              },
              val: 1,
              text: 'check',
            },
            ' ',
            {
              block: 'spin',
              mods: {theme: 'islands', size: 'm', visible: true},
            },
          ],
        },

        {tag: 'br'},

        {
          block: 'line',
          mods: {size: 'l'},
          content: [
            'size l (32px height) ',
            {
              block: 'input',
              mods: {'theme': 'islands', 'size': 'l', 'has-clear': true},
              val: 'value',
              placeholder: 'placeholder',
            },
            ' ',
            {
              block: 'button',
              mods: {theme: 'islands', size: 'l'},
              text: 'button',
            },
            ' ',
            {
              block: 'button',
              mods: {theme: 'islands', size: 'l'},
              text: 'button',
              icon: {block: 'icon', mods: {action: 'download'}},
            },
            ' ',
            {
              block: 'button',
              mods: {theme: 'islands', size: 'l'},
              icon: {
                block: 'spin',
                mods: {theme: 'islands', size: 'm', visible: true},
              },
              text: 'Loading...',
            },
            ' ',
            {
              block: 'checkbox',
              mods: {theme: 'islands', size: 'l', checked: true},
              val: 1,
              text: 'check',
            },
            ' ',
            {
              block: 'checkbox',
              mods: {theme: 'islands', size: 'l', type: 'button'},
              val: 1,
              text: 'check',
            },
            ' ',
            {
              block: 'spin',
              mods: {theme: 'islands', size: 'l', visible: true},
            },
          ],
        },

        {tag: 'br'},

        {
          block: 'line',
          mods: {size: 'xl'},
          content: [
            'size xl (38px height) ',
            {
              block: 'input',
              mods: {'theme': 'islands', 'size': 'xl', 'has-clear': true},
              val: 'value',
              placeholder: 'placeholder',
            },
            ' ',
            {
              block: 'button',
              mods: {theme: 'islands', size: 'xl'},
              text: 'button',
            },
            ' ',
            {
              block: 'button',
              mods: {theme: 'islands', size: 'xl'},
              text: 'button',
              icon: {block: 'icon', mods: {action: 'download'}},
            },
            ' ',
            {
              block: 'button',
              mods: {theme: 'islands', size: 'xl'},
              icon: {
                block: 'spin',
                mods: {theme: 'islands', size: 'l', visible: true},
              },
              text: 'Loading...',
            },
            ' ',
            {
              block: 'checkbox',
              mods: {theme: 'islands', size: 'xl', type: 'button'},
              val: 1,
              text: 'check',
            },
            ' ',
            {
              block: 'spin',
              mods: {theme: 'islands', size: 'xl', visible: true},
            },
          ],
        },
      ],
    },
    {
      block: 'footer',
      content: [
        'footer content goes here',
      ],
    },
  ],
};
