import { ForwardedRef } from 'react';
import { SpatialNavigationNode } from '../Node';
import {
  PointerScrollProps,
  SpatialNavigationVirtualizedListWithScroll,
  SpatialNavigationVirtualizedListWithScrollProps,
} from './SpatialNavigationVirtualizedListWithScroll';
import { typedMemo } from '../../helpers/TypedMemo';

import { typedForwardRef } from '../../helpers/TypedForwardRef';
import { SpatialNavigationVirtualizedListRef } from '../../types/SpatialNavigationVirtualizedListRef';

/**
 * Use this component to render horizontally or vertically virtualized lists with spatial navigation
 * This component wraps the virtualized list inside a parent navigation node.
 * */
export const SpatialNavigationVirtualizedList = typedMemo(
  typedForwardRef(
    <T,>(
      props: Omit<SpatialNavigationVirtualizedListWithScrollProps<T>, 'isActive'> &
        PointerScrollProps,
      ref: ForwardedRef<SpatialNavigationVirtualizedListRef>,
    ) => {
      return (
        <SpatialNavigationNode
          alignInGrid={props.isGrid ?? false}
          orientation={props.orientation ?? 'horizontal'}
        >
          {({ isActive }) => (
            <SpatialNavigationVirtualizedListWithScroll<T>
              {...props}
              isActive={isActive}
              ref={ref}
            />
          )}
        </SpatialNavigationNode>
      );
    },
  ),
);
SpatialNavigationVirtualizedList.displayName = 'SpatialNavigationVirtualizedList';
