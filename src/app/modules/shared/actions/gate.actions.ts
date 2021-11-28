export namespace Gate {

  export class Entry {
    static readonly type = '[Gate] Entry';

    public constructor(
      public readonly gymObjectId: string,
      public readonly userId: string
    ) {
    }
  }

  export class Valid {
    static readonly type = '[Gate] Valid';

    public constructor(
      public readonly gymObjectId: string,
      public readonly userId: string
    ) {
    }
  }

  export class Exit {
    static readonly type = '[Gate] Exit';

    public constructor(
      public readonly gymObjectId: string,
      public readonly userId: string
    ) {
    }
  }

  export class Clear {
    static readonly type = '[Gate] Clear';
  }

}
