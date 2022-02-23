import React from 'react';

import { ReactComponent as Star } from './assets/star.svg';
import { ReactComponent as Code } from './assets/code.svg';

import {
  ProjectContainer,
  ProjectName,
  ProjectDescription,
  ProjectStatus,
  StatusItem
} from './styled';

export default function ProjectCard(data) {
	function emojiMarkdownTest(word: string) {
		const re = /:+\S+:/;
		return !re.test(word);
	}

	function standardizesDescription(description: string) {
		let descriptionModified = description
			.split(' ')
			.filter(emojiMarkdownTest)
			.join(' ');

		descriptionModified = descriptionModified.length > 30
			? descriptionModified.slice(0, 30) + '...'
			: descriptionModified;

		return descriptionModified;
	}

  return (
    <ProjectContainer
      href={data.url}
      target='_blank'
      rel='noreferrer'
    >
      <ProjectName>
        {data.name.split('-').join(' ')}
      </ProjectName>
      <ProjectDescription>
        {standardizesDescription(data.description)}
      </ProjectDescription>
        <ProjectStatus>
          {(data.mainLanguage !== null) ? (
              <StatusItem>
                <Code /> {data.mainLanguage}
              </StatusItem>
            ) : (
            <></>
          )}
          {(data.stars !== null) ? (
              <StatusItem>
                <Star /> {data.stars}
              </StatusItem>
            ) : (
            <></>
          )}
      </ProjectStatus>
    </ProjectContainer>
  );
}
