import { useState, useEffect } from 'react'
import { 
  FluentProvider, 
  webDarkTheme, 
  webLightTheme,
  Button,
  Card,
  Text,
  Title1,
  Body1,
  Switch,
  Link,
  makeStyles
} from '@fluentui/react-components'

import './App.css'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '2rem',
    gap: '1.5rem',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  themeSwitch: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    position: 'absolute',
    top: '1rem',
    right: '1rem',
  },
  linkCard: {
    width: '100%',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    ':hover': {
      transform: 'translateY(-3px)',
    },
  },
  linkContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.5rem',
  },
  avatar: {
    flexShrink: 0
  },
  footer: {
    marginTop: '2rem',
    textAlign: 'center',
    opacity: 0.7,
  }
});

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const styles = useStyles();
  
  // 示例链接数据
  const links = [
    {
      title: "Homepage",
      url: "https://krnl32.win",
      description: "My personal website and blog",
      icon: "🌐"
    },
    {
      title: "Blog",
      url: "https://blog.krnl32.win",
      description: "My blog about tech and life",
      icon: "📝"
    },
    {
      title: "GitHub",
      url: "https://github.com/ntkrnl32",
      description: "Nt ❤️ OpenSource",
      icon: "💻"
    },
    {
      title: "Twitter",
      url: "https://x.com/ntkrnl32",
      description: "My latest activities",
      icon: "👀"
    }
  ];

  // 切换主题
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <FluentProvider theme={isDarkTheme ? webDarkTheme : webLightTheme}>
      <div className={styles.themeSwitch}>
        <Switch 
          checked={isDarkTheme}
          onChange={toggleTheme}
          label={{ position: 'after', content: '' }}
        />
      </div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <img src="https://a.krnl32.win/avatar/gc" alt="Avatar" className={styles.avatar} />
          <Title1>NtKrnl32's Homepage</Title1>
          <Body1>My public stuff...</Body1>
        </div>

        {links.map((link, index) => (
          <Card 
            key={index} 
            className={styles.linkCard}
            onClick={() => window.open(link.url, '_blank')}
          >
            <div className={styles.linkContent}>
              <Text size={32} className={styles.avatar}>{link.icon}</Text>
              <div>
                <Text weight="semibold" size={400}>{link.title+" "}</Text>
                <Text size={300}>{link.description}</Text>
              </div>
            </div>
          </Card>
        ))}

        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <Button 
            onClick={() => window.open('https://a.krnl32.win/key', '_blank')}
          >
            Public Key
          </Button>
          <Button 
            onClick={() => window.open('https://siiway.top', '_blank')}
          >
            SiiWay Team
          </Button>
          <Button 
            onClick={() => window.open('mailto:nt@krnl32.win', '_blank')}
          >
            Email
          </Button>
        </div>
        <Text className={styles.footer}>
          Copyright (c) {new Date().getFullYear()} NtKrnl32 | Built with React and Fluent UI
        </Text>
      </div>
    </FluentProvider>
  )
}

export default App
