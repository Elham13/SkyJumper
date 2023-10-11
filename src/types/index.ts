export interface AppInfo {
  location?: {
    latitude: number;
    longitude: number;
    altitude?: number;
  };
  selectedScreen?: 'Trampoline' | 'Go Banana';
}
