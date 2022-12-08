import Link from 'next/link'
import {
  At,
  ChatCircleText,
  ChatText,
  Envelope,
  MapPin,
  TelegramLogo,
  User,
  WhatsappLogo,
} from 'phosphor-react'
import { ButtonSecondary, Container, Title } from '../../styles/styles'
import { ContainerContact, ContactContent, Form } from './styles'

export function Contact() {
  return (
    <Container id="contact">
      <ContainerContact>
        <Title>
          Contact
          <span><Envelope /> Contact</span>
        </Title>

        <ContactContent>
          <div className="contact-content">
            <h4><WhatsappLogo size={22} color="#00fffb" /> WhatsApp </h4>
            <Link href="https://api.whatsapp.com/send?phone=+6282321093858">
              <a target="_blank">
                <span>+62 82321093858</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4> <TelegramLogo size={22} color="#00fffb" /> Email </h4>
            <Link href="mailto:awan72.ra@gmail.com">
              <a target="_blank">
                <span>awan72.ra@gmail.com</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4><MapPin size={22} color="#00fffb" /> Location</h4>
            <span>Kab.Bandung, Kec.Soreang</span>
          </div>
        </ContactContent>
        <Form
          action="https://formsubmit.co/awan72.ra@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_template" value="box" />

          <div className="input-group">
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder=" "
              required
              className="input"
            />
            <label htmlFor="name" className="user-label">
              Name{' '}
              <span>
                <User size={15} weight="bold" />
              </span>
            </label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              autoComplete="email"
              id="email"
              placeholder=" "
              required
              className="input"
            />
            <label htmlFor="email" className="user-label">
              Email{' '}
              <span>
                <At size={15} weight="bold" />
              </span>
            </label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="subject"
              id="subject"
              autoComplete="subject"
              placeholder=" "
              required
              className="input"
            />
            <label htmlFor="subject" className="user-label">
              Subject{' '}
              <span>
                <ChatText size={15} weight="bold" />
              </span>
            </label>
          </div>

          <div className="input-group">
            <textarea
              name="description"
              id="description"
              autoComplete="description"
              required
              placeholder=" "
              className="input"
            ></textarea>
            <label htmlFor="description" className="user-label">
              Message{' '}
              <span>
                <ChatCircleText size={15} weight="bold" />
              </span>
            </label>
          </div>

          <ButtonSecondary type="submit">
            Submit <TelegramLogo size={15} weight="bold" />{' '}
          </ButtonSecondary>
        </Form>
      </ContainerContact>
    </Container>
  )
}
