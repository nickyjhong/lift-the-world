import React from 'react'
import { Link } from 'react-router-dom'

const contacts = [
  {
    name: 'Nicole Hong',
    image: 'https://media-exp1.licdn.com/dms/image/C4E03AQH0MhShnu4r_A/profile-displayphoto-shrink_400_400/0/1658867372014?e=1668038400&v=beta&t=S7Ha1giy8_-f7GrKr-AzIBWxSUKZLaBRp4eXJl7Theg',
    github: 'https://github.com/nickyjhong',
    linkedin: 'https://www.linkedin.com/in/nicolejhong/'
  }, {
    name: 'Cherry Xu',
    image: 'https://media-exp1.licdn.com/dms/image/C4E03AQEol4Y_4bO4JQ/profile-displayphoto-shrink_800_800/0/1598046633166?e=1668038400&v=beta&t=VboBOjwJOXHeGSVvzkbPRBZA2s551bj6zR0HrJlbO-s',
    github: 'https://github.com/mscherryxu',
    linkedin: 'https://www.linkedin.com/in/cherryxu-rdcdn/'
  }, {
    name: 'Ryan Scoville',
    image: "https://media-exp1.licdn.com/dms/image/C5603AQFdR4lLk2KT3g/profile-displayphoto-shrink_800_800/0/1661710087030?e=1668038400&v=beta&t=G3LDxufb2PG-LezSQ4jqZyOhwlYTH_ImGZGByH5AWBg",
    github: 'https://github.com/rscoville29',
    linkedin: 'https://www.linkedin.com/in/ryan-scoville/'
  }, {
    name: 'Kyle Parkinson',
    image: 'https://media-exp1.licdn.com/dms/image/C4E03AQErE6TRASNA3g/profile-displayphoto-shrink_800_800/0/1636141078706?e=1668038400&v=beta&t=cZdeq655sOu8j8uUh3JpwOFUa-t18atKDe0EE74_X2s',
    github: 'https://github.com/kparki1130',
    linkedin: 'https://www.linkedin.com/in/kyle-e-parkinson/'
  },
]

export default function Contact() {
  return (
    <div className="contact-container">
      <p className="contact-heading">Meet the team</p>
      <div className="contact-members-container">
        {contacts.map((contact) => {
          return (
            <div className="contact-single-container" key={contact.name}>
              <div className="contact-pic-container">
                <img src={contact.image} className="contact-pic"/>
                <p className="contact-info contact-name">{contact.name}</p>
              </div>
              <div className="contact-info-container">
                <Link to={contact.github}>
                  <p className="contact-info contact-github">GitHub</p>
                </Link>
                <Link to={contact.linkedin}>
                  <p className="contact-info contact-linkedin">LinkedIn</p>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
