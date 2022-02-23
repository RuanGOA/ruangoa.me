import React from 'react';

import { SectionComponent } from '../index';

import { 
  Link,
  List,
  ItemList
} from '../styled';

export default function Courses() {
  const data = {
    'Hiring Coders Training Program II - First Phase [2021]': 'https://drive.google.com/file/d/1WuCivKcA9ZKAYDz0IHm5HYHo1WS8mq1q/view',
    'SCRUM Fundamentals Certified [2021]': 'https://drive.google.com/file/d/17Ojmf-Ghb-Kf1jTqUAcLO32PVY9jVYNu/view',
    'OpenShift I: Containers & Kubernetes (DO180) [2021]': 'https://rha.ole.redhat.com/rha/api/certificates/attendance/uuid/64bf5660-ca34-4d5b-a783-4186c4fcaf06'
  };

  return (
    <SectionComponent title="Cursos">
      <List>
      {Object.entries(data).map(([key, url]) => (
        <ItemList key={key} className="dotted">
          <Link
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {key}
          </Link>
        </ItemList>
      ))}
      </List>
    </SectionComponent>
  );
}
