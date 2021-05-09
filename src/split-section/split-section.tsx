import React from "react";
import { Title } from "../title";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={482}
      height={482}
      viewBox="0 0 482 482"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#9473B0" stroke="#000" strokeWidth={4} d="M2 2h478v478H2z" />
      <path
        d="M451.19 168.17v310.34c0 .05-.03.08-.08.08h-51.29c19.08-20.18 19-60.09-.26-80.06-19.34-20.1-19.34-60.27 0-80.34s19.34-60.24 0-80.34c-19.34-20.07-19.34-60.24 0-80.34 19.08-19.81 16.9-59.18-1.77-79.54 31.74 17.38 53.4 51.65 53.4 90.2z"
        fill="#F17A5D"
      />
      <path
        d="M399.56 237.85c19.34 20.1 19.34 60.27 0 80.34s-19.34 60.24 0 80.34c19.26 19.97 19.34 59.88.26 80.06h-51.81c-.05 0-.08-.03-.08-.08V166.2c0-.05-.05-.08-.1-.08h-96.75c-.05 0-.08-.05-.08-.1.05-54.57 43.75-98.91 98.05-100 17.62-.34 34.24 4.06 48.74 11.96 18.66 20.36 20.85 59.72 1.77 79.54-19.34 20.09-19.34 60.26 0 80.33zm-69.3-126.33c0-4.58-3.72-8.29-8.29-8.29-4.6 0-8.32 3.72-8.32 8.29 0 4.57 3.72 8.29 8.32 8.29 4.57 0 8.29-3.72 8.29-8.29z"
        fill="#FCE8DE"
      />
      <path
        d="M321.97 103.22c4.58 0 8.29 3.72 8.29 8.29 0 4.57-3.72 8.29-8.29 8.29-4.6 0-8.32-3.72-8.32-8.29 0-4.57 3.71-8.29 8.32-8.29z"
        fill="#1D1D1B"
      />
      <path
        d="M399.82 478.59h-51.81c-.05 0-.08-.03-.08-.08V166.2c0-.05-.05-.08-.1-.08h-96.75c-.05 0-.08-.05-.08-.1.05-54.57 43.75-98.91 98.05-100 17.62-.34 34.24 4.06 48.74 11.96 31.74 17.37 53.39 51.64 53.39 90.2v310.34c0 .05-.03.08-.08.08h-51.28v-.01z"
        stroke="#1D1D1B"
        strokeWidth={4}
        strokeMiterlimit={1}
      />
      <path
        d="M399.56 478.88c.08-.1.18-.18.26-.29 19.08-20.18 19-60.09-.26-80.06-19.34-20.1-19.34-60.27 0-80.34s19.34-60.24 0-80.34c-19.34-20.07-19.34-60.24 0-80.34 19.08-19.81 16.9-59.18-1.77-79.54-.21-.26-.47-.55-.73-.81"
        stroke="#1D1D1B"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <path
        d="M305.86 166.85v33.26l-15.26 15.27v-48.53h31.41v33.26l-15.26 15.27v-48.53"
        fill="#E94135"
      />
      <path
        d="M305.86 166.85v33.26l-15.26 15.27v-48.53h31.41v33.26l-15.26 15.27v-48.53"
        stroke="#1D1D1B"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <path
        d="M35 168.17v310.34c0 .05.03.08.08.08h51.29c-19.08-20.18-19-60.09.26-80.06 19.34-20.1 19.34-60.27 0-80.34s-19.34-60.24 0-80.34c19.34-20.07 19.34-60.24 0-80.34-19.08-19.81-16.9-59.18 1.77-79.54C56.66 95.35 35 129.62 35 168.17z"
        fill="#F17A5D"
      />
      <path
        d="M86.99 398.877h0c-9.519 9.87-14.325 24.703-14.368 39.606-.042 14.824 4.631 29.634 13.964 39.607h51.174V166.2a.57.57 0 01.236-.462.616.616 0 01.364-.118h96.329c-.263-54.114-43.663-98.018-97.559-99.1-17.5-.338-34.008 4.024-48.418 11.86-9.198 10.073-14.359 24.85-14.85 39.589-.492 14.77 3.708 29.418 13.128 39.204 9.782 10.161 14.645 25.363 14.645 40.52 0 15.156-4.863 30.353-14.645 40.504-9.558 9.934-14.365 24.865-14.365 39.834 0 14.97 4.807 29.893 14.365 39.812 9.782 10.151 14.645 25.348 14.645 40.506 0 15.158-4.863 30.362-14.645 40.528zm68.44-287.357c0-4.857 3.944-8.79 8.79-8.79 4.875 0 8.82 3.943 8.82 8.79 0 4.847-3.945 8.79-8.82 8.79-4.846 0-8.79-3.944-8.79-8.79z"
        fill="#FCE8DE"
        stroke="#000"
      />
      <path
        d="M164.22 103.22c-4.58 0-8.29 3.72-8.29 8.29 0 4.57 3.72 8.29 8.29 8.29 4.6 0 8.32-3.72 8.32-8.29 0-4.57-3.71-8.29-8.32-8.29z"
        fill="#1D1D1B"
      />
      <path
        d="M86.37 478.59h51.81c.05 0 .08-.03.08-.08V166.2c0-.05.05-.08.1-.08h96.75c.05 0 .08-.05.08-.1-.05-54.57-43.75-98.91-98.05-100-17.62-.34-34.24 4.06-48.74 11.96-31.74 17.37-53.39 51.64-53.39 90.2v310.34c0 .05.03.08.08.08h51.28v-.01z"
        stroke="#1D1D1B"
        strokeWidth={4}
        strokeMiterlimit={1}
      />
      <path
        d="M86.63 478.88c-.08-.1-.18-.18-.26-.29-19.08-20.18-19-60.09.26-80.06 19.34-20.1 19.34-60.27 0-80.34s-19.34-60.24 0-80.34c19.34-20.07 19.34-60.24 0-80.34-19.08-19.81-16.9-59.18 1.77-79.54.21-.26.47-.55.73-.81"
        stroke="#1D1D1B"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <path
        d="M180.33 166.85v33.26l15.26 15.27v-48.53h-31.41v33.26l15.26 15.27v-48.53"
        fill="#E94135"
      />
      <path
        d="M180.33 166.85v33.26l15.26 15.27v-48.53h-31.41v33.26l15.26 15.27v-48.53"
        stroke="#1D1D1B"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
    </svg>
  );
};

export const SplitSection = ({ title, children }: Props) => (
  <div>
    <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
      <div className="p-8 md:p-16 border-black border-b-4 md:border-b-0 md:border-r-4">
        <Title>{title}</Title>

        {children}
      </div>
      <div className="p-8 md:p-16 relative">
        <div className="max-w-xs">
          <div className="relative aspect-w-1 aspect-h-1">
            <div className="absolute w-full h-full bg-green-500 top-10 left-20"></div>
            <Illustration className="w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
