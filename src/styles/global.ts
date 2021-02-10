import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font: 400 16px Roboto, sans-serif;
}

* {
  box-sizing: border-box;
}

html,
body,
#root {
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  user-select: none;
  font-family: monospace;
}

#root {
  overflow: auto;
  background: #272727;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main {
  position: relative;
  width: 200px;
  height: 30px;
  margin-top:10px;
  cursor: pointer;
  /* border-radius: 5px; */
  box-shadow: 0 0 0 2px white;
  overflow: hidden;
}

.fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: hotpink;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 24px;
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif; */
}

`;
