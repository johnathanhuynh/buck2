/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use buck2_common::target_aliases::BuckConfigTargetAliasResolver;
use buck2_core::cells::cell_path::CellPathRef;
use buck2_core::cells::instance::CellInstance;
use buck2_core::cells::paths::CellRelativePath;
use buck2_core::pattern::pattern_type::TargetPatternExtra;
use buck2_core::pattern::ParsedPattern;
use buck2_core::target::label::TargetLabel;
use buck2_interpreter::types::target_label::StarlarkTargetLabel;
use dupe::Dupe;
use starlark::values::Value;
use starlark::values::ValueLike;

#[derive(Debug, thiserror::Error)]
enum ValueAsTargetLabelError {
    #[error("Expected a single target like item, but was `{0}`")]
    NotATarget(String),
}

pub trait ValueAsStarlarkTargetLabel {
    fn parse_target_platforms(
        self,
        target_alias_resolver: &BuckConfigTargetAliasResolver,
        cell: &CellInstance,
        default_target_platform: &Option<TargetLabel>,
    ) -> anyhow::Result<Option<TargetLabel>>;
}

impl<'v> ValueAsStarlarkTargetLabel for Value<'v> {
    fn parse_target_platforms(
        self,
        target_alias_resolver: &BuckConfigTargetAliasResolver,
        cell: &CellInstance,
        default_target_platform: &Option<TargetLabel>,
    ) -> anyhow::Result<Option<TargetLabel>> {
        let target_platform = if self.is_none() {
            default_target_platform.clone()
        } else if let Some(s) = self.unpack_str() {
            Some(
                ParsedPattern::<TargetPatternExtra>::parse_relaxed(
                    target_alias_resolver,
                    cell.cell_alias_resolver(),
                    // TODO(nga): Parse relaxed relative to cell root is incorrect.
                    CellPathRef::new(cell.name(), CellRelativePath::empty()),
                    s,
                )?
                .as_target_label(s)?,
            )
        } else if let Some(target) = self.downcast_ref::<StarlarkTargetLabel>() {
            Some(target.label().dupe())
        } else {
            return Err(anyhow::anyhow!(ValueAsTargetLabelError::NotATarget(
                self.to_repr()
            )));
        };

        Ok(target_platform)
    }
}
