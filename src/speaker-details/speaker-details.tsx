import React, { ReactNode } from "react";
import { SpeakerSquare } from "../speaker-square/speaker-square";

type Props = {
  name: string;
  portraitUrl: string;
  bio?: string;
  subtitle?: string;
  twitter?: string;
  occupation?: string;
  website?: string;
};

const Row = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="border-b-2 border-purple py-4">
    <div className="text-left text-purple uppercase w-40 inline">{title}: </div>
    <div className="inline">{children}</div>
  </div>
);

export const SpeakerDetails = ({
  name,
  portraitUrl,
  subtitle,
  website,
  occupation,
  bio,
  twitter,
}: Props) => (
  <div className="md:flex w-full flex-row">
    <div className="w-full border-4 md:w-1/4 self-start">
      <SpeakerSquare
        name={name}
        portraitUrl={portraitUrl}
        subtitle={subtitle}
        className="bg-aquamarine"
      />
    </div>
    <div className="flex-1 md:ml-20 self-start">
      <div className="w-full mb-8">
        {website ? (
          <Row title="Website">
            <a href={website} className="hover:underline">
              {website}
            </a>
          </Row>
        ) : null}
        {twitter ? (
          <Row title="twitter">
            <a
              href={`https://twitter.com/${twitter}`}
              className="hover:underline"
            >
              {twitter}
            </a>
          </Row>
        ) : null}
        {occupation ? <Row title="occupation">{occupation}</Row> : null}
      </div>

      <div>{bio}</div>
    </div>
  </div>
);
