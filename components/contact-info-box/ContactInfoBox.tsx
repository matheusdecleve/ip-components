import { ContactInfoBoxProps } from "./types";

export function ContactInfoBox({ items }: ContactInfoBoxProps) {
  return (
    <div className="contact-info-box max-w-sm w-full mx-auto bg-white shadow-lg p-10 space-y-8">
      {items.map((item, index) => (
        <div key={item.id}>
          {/* LABEL */}
          <p className="text-sm text-primary mb-1">
            {item.label} {item.labelHighlight && <b>{item.labelHighlight}</b>}
          </p>

          {/* VALUE */}
          <p className="text-2xl text-dark-gray">
            {Array.isArray(item.value)
              ? item.value.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))
              : item.value.includes("|")
              ? (() => {
                  const [small, rest] = item.value.split("|");
                  return (
                    <>
                      <span className="text-sm">{small}</span>
                      &nbsp;{rest}
                    </>
                  );
                })()
              : item.value}
          </p>

          {/* DIVIDER */}
          {index < items.length - 1 && <hr className="border-gray-100 mt-8" />}
        </div>
      ))}
    </div>
  );
}
