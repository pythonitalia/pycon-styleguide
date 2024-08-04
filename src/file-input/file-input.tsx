import React from "react";
import { FileUploadIcon } from "../icons";
import { Text } from "../text";

type Props = {
  placeholder?: string;
  accept?: string;
  name?: string;
  errors?: string[];
  onChange?: (file: File | null) => void;
  value?: File | null;
};

export const FileInput = React.forwardRef<HTMLInputElement, Props>(
  ({ placeholder, accept, name, errors, onChange, value }: Props, ref) => {
    const allErrors = errors ?? [];
    const hasErrors = allErrors.length > 0;

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        onChange?.(null);
        return;
      }

      onChange?.(e.target.files[0]);
    };

    const visibleName = value?.name ?? placeholder;

    return (
      <div>
        <label>
          <div className="border-b border-black pb-2 flex justify-between">
            <Text color="grey-250" size={2}>
              {visibleName}
            </Text>
            <FileUploadIcon />
          </div>
          {hasErrors && (
            <Text as="p" size="label4" color="error" uppercase>
              {allErrors.join(", ")}
            </Text>
          )}

          <input
            ref={ref}
            type="file"
            className="hidden"
            accept={accept}
            name={name}
            onChange={inputChange}
          />
        </label>
      </div>
    );
  },
);
