import { DefaultTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

const AppTheme = {
     ...DefaultTheme,
     colors: {
          ...DefaultTheme.colors,
          primary: '#6B2AEE',
          accent: '#02E7D9',
          text: '#707070',
          textSecondary: '#9B9B9B',
          backdrop: 'rgba(107,42,238,.75)',
          background: '#fff',
          surface: '#fafafa',
          error: '#FC3C00',
          warning: '#FCA600',
          success: '#00d34d',
          grey: {
               50: '#fafafa',
               100: '#f0f0f0',
               200: '#d7d9dd',
               300: '#c4c4c4',
               400: '#9b9b9b',
          },
     },
     shape: {
          borderRadius: '3px',
     },
     spacing(size = 1): string {
          return size * 8 + 'px';
     },
};

export const NavigationTheme = {
     ...NavigationDefaultTheme,
     colors: {
          ...NavigationDefaultTheme.colors,
          primary: AppTheme.colors.primary,
          background: AppTheme.colors.background,
          text: AppTheme.colors.text,
          card: AppTheme.colors.background,
          border: AppTheme.colors.grey[300],
     },
};

export default AppTheme;
