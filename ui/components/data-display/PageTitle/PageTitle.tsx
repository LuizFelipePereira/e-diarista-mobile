import React from 'react';
import {
     PageTitleContainer,
     PageTitleStyled,
     PageTitleSubtitleStyled,
} from './PageTitle.style';

export interface PageTitleProps {
     title: string;
     subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
     return (
          <PageTitleContainer>
               <PageTitleStyled>{title}</PageTitleStyled>
               <PageTitleSubtitleStyled>{subtitle}</PageTitleSubtitleStyled>
          </PageTitleContainer>
     );
};

export default PageTitle;
