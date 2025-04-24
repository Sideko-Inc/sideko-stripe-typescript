import { zodTransform } from "@sideko-inc/stripe/core";
import {
  CustomerSessionCreateBodyComponents,
  External$CustomerSessionCreateBodyComponents,
  Schemas$CustomerSessionCreateBodyComponents,
} from "@sideko-inc/stripe/types/customer-session-create-body-components";
import * as z from "zod";

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * Configuration for each component. Exactly 1 component must be enabled.
   */
  components: CustomerSessionCreateBodyComponents;
  /**
   * The ID of an existing customer for which to create the Customer Session.
   */
  customer: string;
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
  components: External$CustomerSessionCreateBodyComponents;
  customer: string;
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
    components: Schemas$CustomerSessionCreateBodyComponents.in,
    customer: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      components: "components",
      customer: "customer",
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
    components: Schemas$CustomerSessionCreateBodyComponents.out,
    customer: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      components: "components",
      customer: "customer",
      expand: "expand",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
