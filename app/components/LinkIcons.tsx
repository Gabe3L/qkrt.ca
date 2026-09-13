import type { SVGProps } from "react";

type LinkIconProps = Omit<SVGProps<SVGSVGElement>, "children">;

const sharedProps = {
  "aria-hidden": true,
  fill: "none",
  focusable: false,
  viewBox: "0 0 24 24",
} as const;

export function ArrowUpRightIcon(props: LinkIconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function ArrowRightIcon(props: LinkIconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
