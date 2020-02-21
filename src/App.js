import React from 'react'
import styled from 'styled-components'
import { Tween, Timeline } from 'react-gsap'
import { Controller, Scene } from 'react-scrollmagic'

const Wrapper = styled.div`
  position: relative;
  background-color: #222;
  background-image: url(https://pngriver.com/wp-content/uploads/2018/04/Download-Raven-PNG.png);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: top;

  font-family: monospace;
  font-size: 1.6em;
  overflow: hidden;

  * {
    padding: 1em;
    width: auto;
  }
`

function App() {
  return (
    <Wrapper>
      <Controller>
        <Scene duration={6200} pin>
          <Timeline
            target={
              <div
                style={{
                  background: '#f00'
                }}
              >
                Quoth the
              </div>
            }
          >
            <Tween duration={1} ease="Power3.easeOut" from={{ x: '100px' }} />
            <Tween to={{ x: '50px', opacity: 0.3 }} />
            <Timeline
              offset={50}
              delay={-2}
              target={
                <div
                  style={{
                    background: '#f99'
                  }}
                >
                  Raven:
                </div>
              }
            >
              <Tween duration={1} ease="Power3.easeOut" from={{ x: '330px', y: '320px' }} />
              <Tween to={{ x: '70px', y: '5px', opacity: 0.1 }} />
              <Timeline
                delay={-1}
                target={
                  <h1
                    style={{
                      background: '#f55'
                    }}
                  >
                    Nevermoar!
                  </h1>
                }
              >
                <Tween duration={2} ease="Power3.easeOut" from={{ x: '100%', y: '100%', opacity: 0 }} />
                <Tween to={{ x: '-0px', y: '20px', opacity: 1 }} />
              </Timeline>
            </Timeline>
          </Timeline>
        </Scene>
      </Controller>
    </Wrapper>
  )
}

export default App
