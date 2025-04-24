import {
  AccountSessionsCreateBodyComponents,
  External$AccountSessionsCreateBodyComponents,
  Schemas$AccountSessionsCreateBodyComponents,
} from "./account-sessions-create-body-components";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBody
 */
export type AccountSessionsCreateBody = {
  /**
   * The identifier of the account to create an Account Session for.
   */
  account: string;
  /**
   * Each key of the dictionary represents an embedded component, and each embedded component maps to its configuration (e.g. whether it has been enabled or not).
   */
  components: AccountSessionsCreateBodyComponents;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | string
    | AccountSessionsCreateBodyComponents
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBody = {
  account: string;
  components: External$AccountSessionsCreateBodyComponents;
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | string
    | External$AccountSessionsCreateBodyComponents
    | (string[] | undefined)
    | External$AccountSessionsCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBody
 */
const SchemaIn$AccountSessionsCreateBody: z.ZodType<
  AccountSessionsCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string(),
    components: Schemas$AccountSessionsCreateBodyComponents.in,
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      components: "components",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBody
 */
const SchemaOut$AccountSessionsCreateBody: z.ZodType<
  External$AccountSessionsCreateBody, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBody // the object to be transformed
> = z
  .object({
    account: z.string(),
    components: Schemas$AccountSessionsCreateBodyComponents.out,
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      components: "components",
      expand: "expand",
    });
  });

export const Schemas$AccountSessionsCreateBody = {
  in: SchemaIn$AccountSessionsCreateBody,
  out: SchemaOut$AccountSessionsCreateBody,
};
