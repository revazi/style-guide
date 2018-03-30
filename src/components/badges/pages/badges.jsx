import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Badge, {COLOR, SIZE} from '../Badge';

const Badges = () => (
  <div>
    <DocsBlock info="Default">
      <Badge color={COLOR.PEACH}>1</Badge>
      <Badge color={COLOR.MUSTARD}>HOT</Badge>
      <Badge color={COLOR.MINT_SECONDARY}>1 / 2</Badge>
      <Badge color={COLOR.GRAY_SECONDARY}>2 / 3</Badge>
      <Badge color={COLOR.MINT_SECONDARY_LIGHT}>4 / 5</Badge>
      <Badge color={COLOR.PEACH_SECONDARY_LIGHT}>5 / 5</Badge>
      <Badge color={COLOR.BLUE_SECONDARY_LIGHT}>3 / 5</Badge>
      <ContrastBox>
        <Badge>4575</Badge>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Large">
      <Badge color={COLOR.PEACH} size={SIZE.LARGE}>1</Badge>
      <Badge color={COLOR.MINT_SECONDARY_LIGHT} size={SIZE.LARGE}>4 / 5</Badge>
    </DocsBlock>
    <DocsBlock info="Small">
      <Badge color={COLOR.PEACH} size={SIZE.SMALL}>1</Badge>
      <Badge color={COLOR.BLUE_SECONDARY_LIGHT} size={SIZE.SMALL}>3 / 5</Badge>
    </DocsBlock>
    <DocsBlock info="Rounded">
      <Badge color={COLOR.PEACH} rounded>1</Badge>
      <Badge color={COLOR.MUSTARD} rounded>HOT</Badge>
      <Badge color={COLOR.MINT_SECONDARY_LIGHT} size={SIZE.LARGE} rounded>4 / 5</Badge>
      <ContrastBox>
        <Badge rounded size={SIZE.LARGE}>4575</Badge>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="With animation" additionalInfo="(click to reload)">
      <Badge color={COLOR.PEACH} rounded withAnimation>1</Badge>
    </DocsBlock>
  </div>
);

export default Badges;
