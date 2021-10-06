
export function Image({ width, height, className, src }) {
  return (
    <img alt="icon24" className={className || ""} srcSet={src} width={width || "100%"} height={height || "auto"} />
  )
}

export function IconImage24({ className, src }) {
  return (
    <img alt="icon24" className={className} srcSet={src} width="24px" height="24px"/>
  );
}

export function IconImage36({ className, src }) {
  return (
    <img alt="icon36" className={className} srcSet={src} width="36px" height="36px"/>
  );
}

export function IconImage48({ className, src }) {
  return (
    <img alt="icon48" className={className} srcSet={src} width="48px" height="48px"/>
  );
}

export function IconImage56({ className, src }) {
  return (
    <img alt="icon56" className={className} srcSet={src} width="56px" height="56px"/>
  );
}

export function IconImage64({ className, src }) {
  return (
    <img alt="icon64" className={className} srcSet={src} width="64px" height="64px"/>
  );
}