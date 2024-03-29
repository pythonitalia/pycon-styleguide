import React, { useCallback, useState } from "react";
import { Spacer } from "../spacer";
import { Button } from "../button";
import { MultiPartsCardContext } from "./context";

type CTA = {
  label: string | React.ReactNode;
  link: string;
};

type Props = {
  cta?: CTA;
  expand?: string;
  children: React.ReactNode;
  clickablePart?: string;
  openOnFocus?: boolean;
  expandTarget?: string;
  openByDefault?: boolean;
};

export const MultiplePartsCard = ({
  children,
  clickablePart,
  expandTarget,
  cta,
  openByDefault = true,
  openOnFocus = true,
}: Props) => {
  const isMatchingId = (id?: string, target?: string) => {
    if (!target || !id) {
      return false;
    }

    return target === id;
  };
  const [open, toggleOpen] = useState(openByDefault);

  const onFocus = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      if (!clickablePart || !expandTarget) {
        return;
      }

      if (!e.target.closest(`[data-expand-own-id="${expandTarget}"]`)) {
        return;
      }

      if (openOnFocus) {
        toggleOpen(true);
      }
    },
    [openOnFocus, clickablePart, expandTarget]
  );

  return (
    <MultiPartsCardContext.Provider
      value={{
        clickablePart,
        expandTarget,
        open,
        toggleOpen,
        isClickablePart: (id) => isMatchingId(id, clickablePart),
        isTargetPart: (id) => isMatchingId(id, expandTarget),
      }}
    >
      <div onFocus={onFocus} className="flex flex-col multiparts-card-wrapper">
        <div className="flex flex-col justify-between h-full text-center border border-black multiparts-card-content bg-cream divide-y-3">
          {children}
        </div>

        {cta && (
          <>
            <Spacer size="xs" />

            <Button size="small" fullWidth href={cta.link}>
              {cta.label}
            </Button>
          </>
        )}
      </div>
    </MultiPartsCardContext.Provider>
  );
};
