module.exports = {
    // Aapka existing ESLint config yahan pe hoga
  
    rules: {
      // 'react/no-unescaped-entities' rule ko off karna
      'react/no-unescaped-entities': 'off',
  
      // '@typescript-eslint/no-empty-interface' rule ko off karna
      '@typescript-eslint/no-empty-interface': 'off',
    },
  };
  module.exports = {
    extends: [
      'next',
      'next/core-web-vitals',
      // Agar aap custom rules add karna chahte hain, to unko yahan likhein
    ],
    rules: {
      // Custom rules yahan add kar sakte hain
    },
  };
  module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'next',
      'next/core-web-vitals',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      // Custom rules yahan add kar sakte hain
    },
  };
    