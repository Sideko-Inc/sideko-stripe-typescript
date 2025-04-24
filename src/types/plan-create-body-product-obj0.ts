import {
  External$PlanCreateBodyProductObj0Metadata,
  PlanCreateBodyProductObj0Metadata,
  Schemas$PlanCreateBodyProductObj0Metadata,
} from "./plan-create-body-product-obj0-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The product whose pricing the created plan will represent. This can either be the ID of an existing product, or a dictionary containing fields used to create a [service product](https://stripe.com/docs/api#product_object-type).
 */
export type PlanCreateBodyProductObj0 = {
  active?: boolean | undefined;
  id?: string | undefined;
  metadata?: PlanCreateBodyProductObj0Metadata | undefined;
  name: string;
  statementDescriptor?: string | undefined;
  taxCode?: string | undefined;
  unitLabel?: string | undefined;
};

/**
 * @internal
 * PlanCreateBodyProductObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PlanCreateBodyProductObj0 = {
  active?: boolean | undefined;
  id?: string | undefined;
  metadata?: External$PlanCreateBodyProductObj0Metadata | undefined;
  name: string;
  statement_descriptor?: string | undefined;
  tax_code?: string | undefined;
  unit_label?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PlanCreateBodyProductObj0
 */
const SchemaIn$PlanCreateBodyProductObj0: z.ZodType<
  PlanCreateBodyProductObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    id: z.string().optional(),
    metadata: Schemas$PlanCreateBodyProductObj0Metadata.in.optional(),
    name: z.string(),
    statement_descriptor: z.string().optional(),
    tax_code: z.string().optional(),
    unit_label: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      id: "id",
      metadata: "metadata",
      name: "name",
      statement_descriptor: "statementDescriptor",
      tax_code: "taxCode",
      unit_label: "unitLabel",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PlanCreateBodyProductObj0
 */
const SchemaOut$PlanCreateBodyProductObj0: z.ZodType<
  External$PlanCreateBodyProductObj0, // output type of this zod object
  z.ZodTypeDef,
  PlanCreateBodyProductObj0 // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    id: z.string().optional(),
    metadata: Schemas$PlanCreateBodyProductObj0Metadata.out.optional(),
    name: z.string(),
    statementDescriptor: z.string().optional(),
    taxCode: z.string().optional(),
    unitLabel: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      id: "id",
      metadata: "metadata",
      name: "name",
      statementDescriptor: "statement_descriptor",
      taxCode: "tax_code",
      unitLabel: "unit_label",
    });
  });

export const Schemas$PlanCreateBodyProductObj0 = {
  in: SchemaIn$PlanCreateBodyProductObj0,
  out: SchemaOut$PlanCreateBodyProductObj0,
};
