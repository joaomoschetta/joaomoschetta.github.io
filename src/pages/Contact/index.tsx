import React from "react";

import { contacts } from '../../data/contacts';

import './style.scss';

export function Contact() {
  
  return (
    <main className="contact-page">
      <h3>CONTATO</h3>

      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <a
                href={contact.link}
                target="_blank"
                rel="noreferrer nofollow noopener external"
              >
                <section className="top-row">
                  {contact.icon && (
                    <div className="img-container">
                      <img src={contact.icon} alt="" />
                    </div>
                  )}

                  <strong
                    className={contact.icon ? 'hasIcon' : ''}
                  >{contact.title}</strong>
                </section>

                {(contact.text || contact.adicionalTitle) && (<section className="down-row">
                  {contact.text && (
                    <p>{contact.text}</p>
                  )}
                  
                  {contact.adicionalTitle && (
                    <strong>{contact.adicionalTitle}</strong>
                  )}
                </section>)}
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}