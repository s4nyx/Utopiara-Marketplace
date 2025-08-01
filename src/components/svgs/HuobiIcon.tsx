interface Props {
  classname: string;
}

export const HuobiIcon = ({ classname }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classname}
    focusable="false"
    aria-hidden="true"
  >
    <rect height="24" width="24" rx="8" fill="white" />
    <g clipPath="url(#HuobiGlobalBadge_a)">
      <path
        d="M13.5001 8.52126C13.5001 6.22545 12.3934 4.24753 11.5457 3.59999C11.5457 3.59999 11.4868 3.56467 11.4868 3.65886C11.4162 8.09742 9.16746 9.31007 7.91949 10.923C5.05856 14.667 7.71934 18.7641 10.4272 19.5176C11.946 19.9414 10.074 18.7641 9.83854 16.2917C9.55598 13.2895 13.5001 11.0054 13.5001 8.52126"
        className="fill-[#282E5B]"
      />
      <path
        d="M14.9835 10.04C14.9718 10.0282 14.9482 10.0282 14.9247 10.04C14.9247 10.04 14.9247 10.04 14.9129 10.0517C14.8658 10.6051 14.2536 11.806 13.4883 12.9009C10.8864 16.6213 12.3698 18.4108 13.2057 19.3762C13.6885 19.9414 13.2057 19.3762 14.4184 18.7993C14.5126 18.7522 16.7731 17.5514 17.0203 14.8317C17.2676 12.1827 15.584 10.5227 14.9835 10.04"
        className="fill-[#059BDC]"
      />
    </g>
    <defs>
      <clipPath id="HuobiGlobalBadge_a">
        <rect
          width="10.3606"
          height="16"
          fill="white"
          transform="translate(6.69507 3.59998)"
        />
      </clipPath>
    </defs>
  </svg>
);
