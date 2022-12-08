/* eslint-disable @next/next/no-img-element */
import { DownloadSimple, User } from 'phosphor-react'
import { Container, Title } from '../../styles/styles'
import { ButtonPrimary } from '../../styles/styles'
import { AboutContainer } from './styles'

export function About() {
  return (
    <Container id="about">
      <Title>
        About
        <span>
          <User /> About
        </span>
      </Title>
      <AboutContainer>
        <div className="AboutImg">
          <img
            className="AboutImg"
            src="/Foto-Profile.JPG"
            alt="Imagem de perfil Evander"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <p>
              I am a Front-End developer living in Bandung, I graduated with a Bachelor of systems analysis and System Development.
            </p>
            <p>
              I have a keen interest in web development starting in 2022, with building websites built in Html, CSS and JavaScript.
            </p>
            <p>
              at the moment i am studying and developing web project , to broaden my knowledge and thereby further enhance my skills.
            </p>
          </div>
          <a href="/pdf/CV-Web-Developer.pdf" download>
            <ButtonPrimary>
              <b>Download CV</b> <DownloadSimple weight="bold" />
            </ButtonPrimary>
          </a>
        </div>
      </AboutContainer>
    </Container>
  )
}
