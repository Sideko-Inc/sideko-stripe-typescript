import {
  BankAccount,
  External$BankAccount,
  Schemas$BankAccount,
} from "./bank-account";
import { Card, External$Card, Schemas$Card } from "./card";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Tokenization is the process Stripe uses to collect sensitive card or bank
 * account details, or personally identifiable information (PII), directly from
 * your customers in a secure manner. A token representing this information is
 * returned to your server to use. Use our
 * [recommended payments integrations](https://stripe.com/docs/payments) to perform this process
 * on the client-side. This guarantees that no sensitive card data touches your server,
 * and allows your integration to operate in a PCI-compliant way.
 *
 * If you can't use client-side tokenization, you can also create tokens using
 * the API with either your publishable or secret API key. If
 * your integration uses this method, you're responsible for any PCI compliance
 * that it might require, and you must keep your secret API key safe. Unlike with
 * client-side tokenization, your customer's information isn't sent directly to
 * Stripe, so we can't determine how it's handled or stored.
 *
 * You can't store or use tokens more than once. To store card or bank account
 * information for later use, create [Customer](https://stripe.com/docs/api#customers)
 * objects or [External accounts](/api#external_accounts).
 * [Radar](https://stripe.com/docs/radar), our integrated solution for automatic fraud protection,
 * performs best with integrations that use client-side tokenization.
 */
export type Token = {
  /**
   * These bank accounts are payment methods on `Customer` objects.
   *
   * On the other hand [External Accounts](/api#external_accounts) are transfer
   * destinations on `Account` objects for connected accounts.
   * They can be bank accounts or debit cards as well, and are documented in the links above.
   *
   * Related guide: [Bank debits and transfers](/payments/bank-debits-transfers)
   */
  bankAccount?: BankAccount | undefined;
  /**
   * You can store multiple cards on a customer in order to charge the customer
   * later. You can also store multiple debit cards on a recipient in order to
   * transfer to those cards later.
   *
   * Related guide: [Card payments with Sources](https://stripe.com/docs/sources/cards)
   */
  card?: Card | undefined;
  /**
   * IP address of the client that generates the token.
   */
  clientIp?: string | null | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "token";
  /**
   * Type of the token: `account`, `bank_account`, `card`, or `pii`.
   */
  type: string;
  /**
   * Determines if you have already used this token (you can only use tokens once).
   */
  used: boolean;
};

/**
 * @internal
 * Token without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Token = {
  bank_account?: External$BankAccount | undefined;
  card?: External$Card | undefined;
  client_ip?: string | null | undefined;
  created: number;
  id: string;
  livemode: boolean;
  object: "token";
  type: string;
  used: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Token
 */
const SchemaIn$Token: z.ZodType<
  Token, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_account: z.lazy(() => Schemas$BankAccount.in.optional()),
    card: z.lazy(() => Schemas$Card.in.optional()),
    client_ip: z.string().nullable().optional(),
    created: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["token"]),
    type: z.string(),
    used: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_account: "bankAccount",
      card: "card",
      client_ip: "clientIp",
      created: "created",
      id: "id",
      livemode: "livemode",
      object: "object",
      type: "type",
      used: "used",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Token
 */
const SchemaOut$Token: z.ZodType<
  External$Token, // output type of this zod object
  z.ZodTypeDef,
  Token // the object to be transformed
> = z
  .object({
    bankAccount: z.lazy(() => Schemas$BankAccount.out.optional()),
    card: z.lazy(() => Schemas$Card.out.optional()),
    clientIp: z.string().nullable().optional(),
    created: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["token"]),
    type: z.string(),
    used: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankAccount: "bank_account",
      card: "card",
      clientIp: "client_ip",
      created: "created",
      id: "id",
      livemode: "livemode",
      object: "object",
      type: "type",
      used: "used",
    });
  });

export const Schemas$Token = {
  in: SchemaIn$Token,
  out: SchemaOut$Token,
};
