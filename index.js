const tree = {
  name: 1,
  left: {
    name: 2,
    left: {
      name: 4,
      left: {
        name: 8
      }
    },
    right: {
      name: 5
    }
  },
  right: {
    name: 3,
    left: {
      name: 6
    }
  }
};

const LEFT = "left";
const RIGHT = "right";

const getChildren = branch => {
  return Object.keys(branch);
};

const dfs = tree => {
  console.log(`-------------------------`);
  console.log(`name in`, tree.name);
  console.log(`-------------------------`);

  if (tree.left) {
    dfs(tree.left);
  }

  if (tree.right) {
    dfs(tree.right);
  }
};

const path = dfs(tree);
