import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

interface FlatNode {
  name: string;
  level: number;
  expandable: boolean;
}

@Component({
  selector: 'app-sortable-tree',
  templateUrl: './sortable-tree.component.html',
  styleUrls: ['./sortable-tree.component.scss']
})
export class SortableTreeComponent {
  private _transformer = (node: TreeNode, level: number): FlatNode => ({
    name: node.name,
    level: level,
    expandable: !!node.children && node.children.length > 0,
  });

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeDataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    const treeData: TreeNode[] = [
      {
        name: 'Fruit',
        children: [
          { name: 'Apple' },
          { name: 'Banana' },
        ]
      },
      {
        name: 'Vegetables',
        children: [
          { name: 'Tomato' },
          { name: 'Potato' },
        ]
      }
    ];
    this.treeDataSource.data = treeData;
  }

  drop(event: any) {
    const previousIndex = this.treeDataSource.data.findIndex((node) => node === event.item.data);
    moveItemInArray(this.treeDataSource.data, previousIndex, event.currentIndex);
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;
}
