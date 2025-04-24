import { zodTransform } from "@sideko-inc/stripe/core";
import {
  AccountSessionsCreateBodyComponents,
  External$AccountSessionsCreateBodyComponents,
  Schemas$AccountSessionsCreateBodyComponents,
} from "@sideko-inc/stripe/types/account-sessions-create-body-components";
import * as z from "zod";

/**
 * CreateRequest
 */
export type CreateRequest = {
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
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  account: string;
  components: External$AccountSessionsCreateBodyComponents;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string(),
    components: Schemas$AccountSessionsCreateBodyComponents.in,
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      components: "components",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    account: z.string(),
    components: Schemas$AccountSessionsCreateBodyComponents.out,
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      components: "components",
      expand: "expand",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
