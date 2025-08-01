interface Props {
  classname: string;
}

export const TronIcon = ({ classname }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classname}
    focusable="false"
    aria-hidden="true"
  >
    <rect height="24" width="24" rx="8" className="fill-[#EF0027]" />
    <path
      d="M16.274 7.64202L5.45001 5.65002L11.1463 19.984L19.0835 10.3135L16.274 7.64202ZM16.1 8.51952L17.756 10.0938L13.2275 10.9135L16.1 8.51952V8.51952ZM12.2435 10.7493L7.47051 6.79077L15.272 8.22627L12.2435 10.7493V10.7493ZM11.9038 11.4498L11.1253 17.8848L6.92901 7.32252L11.9038 11.449V11.4498ZM12.6238 11.791L17.639 10.8835L11.8865 17.8908L12.6238 11.791Z"
      fill="white"
    />
  </svg>
);
