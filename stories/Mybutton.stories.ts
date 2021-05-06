import {Meta, Story} from '@storybook/angular/types-6-0'

import { ButtonComponent } from 'projects/pattern-lib/src/public-api';

// import { ButtonComponent } from '@css/pattern-lib';





export default {
  title: 'Custom/Buttons',
  component: ButtonComponent,
  argTypes: {
    label: {
      control: 'text'
    }
  }
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args
});

export const FancyBlueButton = Template.bind({});

FancyBlueButton.args = {
  label: 'Button',
};

export const FancyPinkButton = Template.bind({});

FancyBlueButton.args = {
  label: 'Pink version',
  pink: true,
}
