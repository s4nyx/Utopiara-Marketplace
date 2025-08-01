interface Props {
  classname: string;
}

export const BinanceIcon = ({ classname }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classname}
    focusable="false"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.11687 10.4039L12.001 6.51981L15.8884 10.4073L18.1483 8.14735L12.001 2L5.85696 8.14402L8.11687 10.4039ZM2 12.0007L4.25932 9.74138L6.51863 12.0007L4.25932 14.26L2 12.0007ZM12.001 17.4832L8.11684 13.5991L5.85361 15.8557L5.85694 15.859L12.001 22.003L18.1483 15.8557L15.8884 13.5958L12.001 17.4832ZM17.4814 12.0023L19.7407 9.74297L22 12.0023L19.7407 14.2616L17.4814 12.0023ZM12.001 9.70831L14.2942 12.0015L12.001 14.298L9.70779 12.0048V11.9982L10.1105 11.5955L10.3069 11.4024L12.001 9.70831Z"
      className="fill-[#F3BA2F]"
    />
  </svg>
);
