import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { ThemeToggler } from 'storybook/decorators'

import { ButtonBase, ButtonBaseProps } from './'

export default {
  title: 'Common/Button',
  component: ButtonBase,
  decorators: [ThemeToggler],
  argTypes: {
    label: { control: 'text' },
    kind: { control: 'radio' },
    size: { control: 'inline-radio' },
    as: { control: null },
    theme: { control: null },
    forwardedAs: { control: null },
  },
} as Meta

const Template: Story<ButtonBaseProps & { label?: string | React.ReactNode }> = (args) => (
  <ButtonBase {...args}>{args.label}</ButtonBase>
)

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  label: 'Main Button',
  kind: 'default',
}

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
  label: 'Secondary Button',
  kind: 'secondary',
}

export const SuccessButton = Template.bind({})
SuccessButton.args = {
  label: 'Success Button',
  kind: 'success',
}

export const WarningButton = Template.bind({})
WarningButton.args = {
  label: 'Warning Button',
  kind: 'warning',
}

export const DangerButton = Template.bind({})
DangerButton.args = {
  label: 'Danger Button',
  kind: 'danger',
}

export const CancelButton = Template.bind({})
CancelButton.args = {
  label: 'Cancel Button',
  kind: 'cancel',
}

export const DisabledButton = Template.bind({})
DisabledButton.args = {
  label: 'Disabled Button',
  kind: 'disabled',
  disabled: true,
}

export const BigButton = Template.bind({})
BigButton.args = {
  label: 'Big Button',
  kind: 'primary',
  size: 'big',
}

export const SmolButton = Template.bind({})
SmolButton.args = {
  label: 'Smol Button',
  kind: 'primary',
  size: 'small',
}
