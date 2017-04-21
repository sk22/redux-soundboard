import React from 'react'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import Container from '../components/Container'
import {BackLink, GitHubIcon} from '../components/Icons'
import StyledLink from '../components/StyledLink'

export default ({history}) => (
  <div>
    <Toolbar
      left={<BackLink history={history}/>}
      right={<a href="https://github.com/sk22/redux-soundboard">
        <GitHubIcon/>
      </a>}
    >
      About
    </Toolbar>
    <Main>
      <Container>
        <section>
          <p>
            Copyright &copy; 2017
            by <StyledLink href="https://github.com/sk22">
            Samuel Kaiser</StyledLink>
          </p>
          <p>
            Read more in the project's <StyledLink
              href="https://github.com/sk22/redux-soundboard/blob/master/README.md">
              README</StyledLink> file.
          </p>
        </section>
        <section>
          <h2>Credits</h2>
          <ul>
            <li>
              <strong>Logo </strong>
              made by <StyledLink
                href="http://www.flaticon.com/authors/roundicons"
                title="Roundicons">Roundicons
              </StyledLink> from <StyledLink
                href="http://www.flaticon.com"
                title="Flaticon">www.flaticon.com
              </StyledLink> is licensed by <StyledLink
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank">CC 3.0 BY</StyledLink>
            </li>
            <li>
              <strong>Icons </strong>
              by Google: <StyledLink
                href="https://material.io/icons">Material Icons
              </StyledLink>
            </li>
            <li>
              <strong>GitHub mark: </strong>
              icon from <StyledLink
                href="https://github.com/github/octicons">GitHub octicons
              </StyledLink>
            </li>
          </ul>
        </section>
        <section>
          <h2>Packages</h2>
          listed in the repository's <StyledLink
            href="https://github.com/sk22/redux-soundboard/blob/master/package.json">
            package.json
          </StyledLink>
        </section>
      </Container>
    </Main>
  </div>
)
