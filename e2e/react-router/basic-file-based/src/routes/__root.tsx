import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    )
  },
})

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg border-b">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to="/posts"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Posts
        </Link>{' '}
        <Link
          to="/layout-a"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Layout
        </Link>{' '}
        <Link
          to="/onlyrouteinside"
          data-testid="link-to-only-route-inside-group"
          search={{ hello: 'world' }}
          activeProps={{
            className: 'font-bold',
          }}
        >
          Only Route Inside Group
        </Link>{' '}
        <Link
          to="/inside"
          data-testid="link-to-route-inside-group"
          search={{ hello: 'world' }}
          activeProps={{
            className: 'font-bold',
          }}
        >
          Inside Group
        </Link>{' '}
        <Link
          to="/subfolder/inside"
          data-testid="link-to-route-inside-group-inside-subfolder"
          search={{ hello: 'world' }}
          activeProps={{
            className: 'font-bold',
          }}
        >
          Inside Subfolder Inside Group
        </Link>{' '}
        <Link
          to="/insidelayout"
          data-testid="link-to-route-inside-group-inside-layout"
          search={{ hello: 'world' }}
          activeProps={{
            className: 'font-bold',
          }}
        >
          Inside Group Inside Layout
        </Link>{' '}
        <Link
          to="/lazyinside"
          data-testid="link-to-lazy-route-inside-group"
          search={{ hello: 'world' }}
          activeProps={{
            className: 'font-bold',
          }}
        >
          Lazy Inside Group
        </Link>{' '}
        <Link
          to="/redirect"
          activeProps={{
            className: 'font-bold',
          }}
        >
          redirect
        </Link>{' '}
        <Link
          // @ts-expect-error
          to="/this-route-does-not-exist"
          activeProps={{
            className: 'font-bold',
          }}
        >
          This Route Does Not Exist
        </Link>
      </div>
      <hr />
      <Outlet />
      {/* Start rendering router matches */}
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
