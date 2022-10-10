/**
  * The sidebars for buck2 documentation work slightly differently than normal.
  * Normally when globbing you don't have control over any ordering (in an easy to manage way)
  * Instead, we do some processing on the manualSidebar array to remove any manually specified
  * files from the autogenerated glob, and keep the manuallly specified ones in order.
  *
  * - To specify manual ordering, just put the filename into the list of items.
  * - New sections should be in a subdirectory, and should generally end have an autogenerated
  *   item as their last item.
  * - Directories that should be excluded from sidebars should be added to the
  *   'universallyExcludedDirs' set below
  *
  * If you're curious how this works, look at `generateSidebarExclusions` and
  * `filterItems` in this module, and `sidebarItemsGenerator` in docusaurus.config.js. Note
  * that `sidebarItemsGenerator` runs for each "autogenerated" item, so that's why we
  * keep track of all globs that have been specified. We need to make sure that only things
  * in "developers/" are included in the developers glob, e.g.
  */

const universallyExcludedDirs = new Set([
  "rfcs/",
  "legacy/",
]);

const manualSidebar = [
    'index',
    'benefits',
    'migration_guide',
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/common_issues',
        {type: 'autogenerated', dirName: 'faq'},
      ],
    },
    'testimonials',
    {type: 'autogenerated', dirName: '.'},
    {
      type: 'category',
      label: 'Rule authors',
      items: [
        'rule_authors/writing_rules',
        'rule_authors/rule_api',
        'rule_authors/transitive_sets',
        'rule_authors/configurations',
        'rule_authors/configuration_transitions',
        'rule_authors/dynamic_dependencies',
        'rule_authors/test_execution',
        'rule_authors/optimization',
        'rule_authors/rule_writing_tips',
        'rule_authors/incremental_actions',
        {type: 'autogenerated', dirName: 'rule_authors'},
      ],
  },
    {
      type: 'category',
      label: 'Developers',
      items: [
        'developers/developers',
        'developers/heap_profiling',
        'developers/observability',
        'developers/options',
        'developers/parity_script',
        'developers/what-ran',
        'developers/bxl',
        {type: 'autogenerated', dirName: 'developers'},
       ],
    },
    {
      type: 'category',
      label: 'Starlark Language',
      items: [{type: 'autogenerated', dirName: 'generated/starlark_rust_docs'}]
    },
    {
      type: 'category',
      label: 'API docs',
      items: [{type: 'autogenerated', dirName: 'generated/native'}],
    },
    {
      type: 'category',
      label: 'Prelude Rules API',
      link: {
        type: 'generated-index',
        title: 'Prelude Rules API',
        description: 'API documentation for prelude.bzl',
        slug: '/generated/starlark/prelude',
      },

      items: [
        'generated/starlark/prelude/prelude.bzl',
        {type: 'autogenerated', dirName: 'generated/starlark'},
      ],
    }
]

function generateSidebarExclusions(items) {
  let excludedDirs = new Set();
  let excludedFiles = new Set();

  for(const item of items) {
    if(item["type"] === "category") {
      const [newExcludedDirs, newExcludedFiles] = generateSidebarExclusions(item.items);
      excludedDirs = new Set([...excludedDirs, ...newExcludedDirs]);
      excludedFiles = new Set([...excludedFiles, ...newExcludedFiles]);
    } else if(item["type"] === "autogenerated") {
      excludedDirs.add(item.dirName + "/");
    } else {
      excludedFiles.add(item)
    }
  }

  return [excludedDirs, excludedFiles];
}

const [mainExcludedDirs, mainExcludedFiles] = generateSidebarExclusions(manualSidebar);

function itemFilter(item, docs) {
  const dirName = item.dirName + '/';
  return docs.filter((doc) => {
    if(item.dirName != '.' && !doc.id.startsWith(dirName)) {
      return false;
    }
    if(mainExcludedFiles.has(doc.id)) {
      return false;
    }
    for(dir of universallyExcludedDirs) {
      if(doc.id.startsWith(dir)) {
        return false;
      }
    }
    for(dir of mainExcludedDirs) {
      if(dirName != dir && doc.id.startsWith(dir)) {
        return false;
      }
    }
    return true;
  });
}

module.exports = {
  itemFilter: itemFilter,
  manualSidebar: manualSidebar,
};
