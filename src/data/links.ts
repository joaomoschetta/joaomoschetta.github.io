interface IDefaultProjectLinks {
  repo?: string;
  demo?: string;
};

interface IDataLinks {
  github: string;
  linkedin: string;
  email: string;
  whatsappApiSendMessage: string;
  curriculum: string;
  projects: {
    weatherApp: IDefaultProjectLinks;
    letmeask: IDefaultProjectLinks;
    extraUtilities: IDefaultProjectLinks;
  };
};

export const dataLinks : IDataLinks = {
  github: 'https://github.com/joaomoschetta',
  linkedin: 'https://www.linkedin.com/in/joaomoschetta/',
  email: 'joaomoschetta@gmail.com',
  whatsappApiSendMessage: 'https://api.whatsapp.com/send?phone=5549988723112',
  curriculum: 'https://docs.google.com/document/d/1rrKFDNuoxbwHQyOVDAvufgijUYV4_lfYRAl9qJUsTLY/edit?usp=sharing',
  projects: {
    weatherApp: {
      repo: 'https://github.com/joaomoschetta/weather-app',
      demo: 'https://weather-app-joaomoschetta.herokuapp.com/',
    },
    letmeask: {
      repo: 'https://github.com/joaomoschetta/letmeask',
      demo: 'https://letmeask-joaomoschetta.vercel.app/',
    },
    extraUtilities: {
      repo: 'https://github.com/joaomoschetta/personal-extra-utilities'
    }
  }
}