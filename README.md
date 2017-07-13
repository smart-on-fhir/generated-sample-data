This repository is just a backup/storage for all the resources that are currently available through our FHIR servers. The edata
is stored in JSON transaction bundles and organised by type and fhir version.

If you want to insert this data into your server please consider using this tool: https://github.com/smart-on-fhir/tag-uploader.
You can read it's documentation for usage instructions, but the very basic example would be something like:

```sh
cd path/to/fhir-uploader
node . -d my/input/directory -S http://my.fhir/server
```
