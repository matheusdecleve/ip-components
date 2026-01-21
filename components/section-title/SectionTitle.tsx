import Link from "next/link";
import Image from "next/image";
import { SectionTitleProps } from "./types";

export function SectionTitle({
  variant = "default",
  eyebrow,
  eyebrowColorClass = "text-primary",
  title,
  description,
  button,
  actions,
  cssClass
}: SectionTitleProps) {
  /* ===========================
     VARIANT: TWO COLUMNS
  ============================ */
  if (variant === "twoColumns") {
    return (
      <div className={`container padding-section ${cssClass}`}>
        {eyebrow && <span className={`text-sm ${eyebrowColorClass}`}>{eyebrow}</span>}

        <div className="grid grid-cols-2 items-center mt-4">
          <div>
            <h2>{title}</h2>
          </div>

          <div className="space-y-8">
            {description && <p className="text-lg">{description}</p>}

            {actions && (
              <div className="flex items-center gap-x-5">
                {actions.map((action, index) => {
                  const isPrimary = action.variant === "primary";

                  return (
                    <Link
                      key={index}
                      href={action.href}
                      className={isPrimary ? "button bg-product-oro-secondary text-white" : "button border border-light text-gray"}
                    >
                      {action.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ===========================
     VARIANT: WITH BUTTON
  ============================ */
  if (variant === "withButton") {
    return (
      <div className={`container padding-section section-title-button flex justify-between ${cssClass}`}>
        <div className="space-y-2">
          {eyebrow && <span className={`text-sm mb-2 block ${eyebrowColorClass}`}>{eyebrow}</span>}

          <h2>{title}</h2>

          {description && <p className="text-lg">{description}</p>}
        </div>

        {button && (
          <div className="justify-items-end content-end mb-4">
            <Link href={button.href} className="button bg-dark-gray text-white inline-flex items-center gap-x-2">
              {button.label}

              {button.icon && <Image src={button.icon} alt="" width={16} height={16} />}
            </Link>
          </div>
        )}
      </div>
    );
  }

  /* ===========================
     VARIANT: DEFAULT
  ============================ */
  return (
    <div className={`container padding-section space-y-2 section-title ${cssClass}`}>
      {eyebrow && <span className={`text-sm mb-2 block ${eyebrowColorClass}`}>{eyebrow}</span>}

      <h2>{title}</h2>

      {description && <p className="text-lg">{description}</p>}
    </div>
  );
}
