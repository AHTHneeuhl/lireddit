import { Migration } from '@mikro-orm/migrations';

export class Migration20230702080959 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("id" int not null, "title" text not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, constraint "post_pkey" primary key ("id", "title"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "post" cascade;');
  }

}
