import { Account, External$Account, Schemas$Account } from "./account";
import {
  Application,
  External$Application,
  Schemas$Application,
} from "./application";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxIDsOwner = {
  /**
   * The account being referenced when `type` is `account`.
   */
  account?: (string | Account) | undefined;
  /**
   * The Connect Application being referenced when `type` is `application`.
   */
  application?: (string | Application) | undefined;
  /**
   * The customer being referenced when `type` is `customer`.
   */
  customer?: (string | Customer) | undefined;
  /**
   * Type of owner referenced.
   */
  type: "account" | "application" | "customer" | "self";
};

/**
 * @internal
 * TaxIDsOwner without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxIDsOwner = {
  account?: (string | External$Account) | undefined;
  application?: (string | External$Application) | undefined;
  customer?: (string | External$Customer) | undefined;
  type: "account" | "application" | "customer" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxIDsOwner
 */
const SchemaIn$TaxIDsOwner: z.ZodType<
  TaxIDsOwner, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.union([z.string(), z.lazy(() => Schemas$Account.in)]).optional(),
    application: z.union([z.string(), Schemas$Application.in]).optional(),
    customer: z
      .union([z.string(), z.lazy(() => Schemas$Customer.in)])
      .optional(),
    type: z.enum(["account", "application", "customer", "self"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      application: "application",
      customer: "customer",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxIDsOwner
 */
const SchemaOut$TaxIDsOwner: z.ZodType<
  External$TaxIDsOwner, // output type of this zod object
  z.ZodTypeDef,
  TaxIDsOwner // the object to be transformed
> = z
  .object({
    account: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    application: z.union([z.string(), Schemas$Application.out]).optional(),
    customer: z
      .union([z.string(), z.lazy(() => Schemas$Customer.out)])
      .optional(),
    type: z.enum(["account", "application", "customer", "self"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      application: "application",
      customer: "customer",
      type: "type",
    });
  });

export const Schemas$TaxIDsOwner = {
  in: SchemaIn$TaxIDsOwner,
  out: SchemaOut$TaxIDsOwner,
};
