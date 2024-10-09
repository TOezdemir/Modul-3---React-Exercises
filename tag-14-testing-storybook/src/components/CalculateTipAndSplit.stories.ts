import type { Meta, StoryObj} from '@storybook/react';
import CalculateTipAndSplit from './CalculateTipAndSplit';

const meta = {
  title: 'Components/TipCalculator',
  component: CalculateTipAndSplit,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CalculateTipAndSplit>;

export default meta;
type Story = StoryObj<typeof meta>;

// Template für die Stories


// Korrekte Verwendung des Templates
export const Hundred: Story ={
args: {
  billAmount: 100,
  numPeople: 2,
  serviceLevel: "average",
}}

export const TwoThree: Story ={
    args: {
    billAmount: 23,
    numPeople: 2,
    serviceLevel: "good",
    }}

export const ThreeSixFive: Story ={
args: {
  billAmount: 365,
  numPeople: 17,
  serviceLevel: "bad",
}}