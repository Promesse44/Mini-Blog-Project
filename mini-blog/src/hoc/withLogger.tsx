import React from 'react'

export default function withLogger(Component: React.ComponentType<any>) {
  const Wrapped: React.FC<any> = (props: any) => {
    React.useEffect(() => {
      const name = Component.displayName || Component.name || 'Component'
      // eslint-disable-next-line no-console
      console.log(`[withLogger] mount ${name}`, props)
      return () => console.log(`[withLogger] unmount ${name}`)
    }, [props])

    return React.createElement(Component, props)
  }

  Wrapped.displayName = `withLogger(${Component.displayName || Component.name || 'Component'})`
  return Wrapped
}
