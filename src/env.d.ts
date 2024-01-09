/// <reference types="astro/client" />

type D1Database = import('@cloudflare/workers-types/experimental').D1Database

type ENV = {
  SERVER_URL: string;
  DB: D1Database;
};

type Runtime = import('@astrojs/cloudflare').DirectoryRuntime<ENV>;

declare namespace App {
  interface Locals extends Runtime {
    user: any;
  }
}