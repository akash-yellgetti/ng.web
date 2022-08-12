export abstract class MainLayout {
    data = {
        view: 'card'
    }

    action = (type: string, data?: any) => {
        switch (type) {
          case 'create':
            this.data.view = 'create';
            break;
          case 'read':
            break;
          case 'update':
            break;
          case 'delete':
            break;
          case 'cancel':
            break;
    
          default:
            break;
        }
      }
}