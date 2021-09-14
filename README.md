# site

Website for LaunchMenu

## Development

Install all dependencies using

```
yarn
```

And start the development process with

```
yarn dev
```

To create a new static export run

```
yarn build
```

### Details

This website uses data from the primary LaunchMenu repository, such that documentation can be done there while styling/presentation concerns are specified in this repository.

When running the website in dev mode, it will ask you to specify the absolute path to a local copy of the LaunchMenu repository. This path is then locally stored in the `.localRemoteFilesPath` file, for future reference. Whenever you make changes to the docs in the primary LM repo while running `yarn dev` in this repository, a reload of the page will directly show the made changes. The `src/services/remoteFiles/setupRemoteFilesSymlink.ts` is used by the custom `src/server.ts` in order to get this to work.

When building the website, it will download the docs directory from the `master` branch of the primary LaunchMenu repository. These docs are then used to generate the website with, and afterwards any resources specified in these remote docs are also copied over to the output directory. The `src/services/remoteFiles/buildFiles/*` files are used to accomplish this during build.
