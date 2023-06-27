import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://samirrijal.com/icon.svg',
    brandTitle: 'Samir Rijal Components',
    brandUrl: 'https://samirrijal.com',
  },
});
